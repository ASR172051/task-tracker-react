import React from 'react';
import { Line } from 'react-chartjs-2';
import { format, subDays } from 'date-fns';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function EnhancedStats({ tasks }) {
  // Calculate stats
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const completionRate = totalTasks ? Math.round((completedTasks / totalTasks) * 100) : 0;
  
  // Get completion data for last 7 days
  const last7Days = Array.from({ length: 7 }, (_, i) => {
    const date = format(subDays(new Date(), i), 'yyyy-MM-dd');
    const dayCompletions = tasks.filter(task => 
      task.completed && 
      task.completedAt?.startsWith(date)
    ).length;
    return {
      date: format(subDays(new Date(), i), 'MMM dd'),
      completions: dayCompletions
    };
  }).reverse();

  // Chart data
  const chartData = {
    labels: last7Days.map(day => day.date),
    datasets: [
      {
        label: 'Completed Tasks',
        data: last7Days.map(day => day.completions),
        borderColor: 'rgba(127, 19, 135, 0.8)',
        backgroundColor: 'rgba(127, 19, 135, 0.2)',
        tension: 0.4,
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#ecf0f1'
        }
      },
      title: {
        display: true,
        text: 'Task Completion Trend',
        color: '#ecf0f1'
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: '#ecf0f1'
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        }
      },
      x: {
        ticks: {
          color: '#ecf0f1'
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        }
      }
    }
  };

  // Calculate category stats
  const categoryStats = tasks.reduce((acc, task) => {
    if (!acc[task.category]) {
      acc[task.category] = { total: 0, completed: 0 };
    }
    acc[task.category].total++;
    if (task.completed) acc[task.category].completed++;
    return acc;
  }, {});

  return (
    <div className="enhanced-stats">
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Overall Progress</h3>
          <div className="progress-circle" style={{ '--progress': `${completionRate}%` }}>
            <span>{completionRate}%</span>
          </div>
        </div>
        
        <div className="stat-card">
          <h3>Category Breakdown</h3>
          <div className="category-stats">
            {Object.entries(categoryStats).map(([category, stats]) => (
              <div key={category} className="category-stat">
                <span>{category}</span>
                <div className="progress-bar">
                  <div 
                    className="progress" 
                    style={{ 
                      width: `${(stats.completed / stats.total) * 100}%`
                    }}
                  ></div>
                </div>
                <span>{stats.completed}/{stats.total}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="chart-container">
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}

export default EnhancedStats;
