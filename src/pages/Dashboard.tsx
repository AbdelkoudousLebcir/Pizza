import React, { useState } from 'react';
import { TrendingUp, AlertTriangle } from 'lucide-react';
import { 
  AreaChart,
  Area,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  ResponsiveContainer,
  Tooltip,
  LineChart,
  Line
} from 'recharts';

const Dashboard: React.FC = () => {
  const [orderTimeframe, setOrderTimeframe] = useState('12 months');
  const [ingredientsTimeframe, setIngredientsTimeframe] = useState('Weekly');

  // Realtime Users Data
  const realtimeData = [
    { label: 'Realtime users', value: 635, change: '+21.01%', trend: 'up' },
    { label: 'Orders today', value: 124, change: '+5.2%', trend: 'up' },
    { label: 'Revenue', value: '$12,450', change: '+8.3%', trend: 'up' },
    { label: 'Active staff', value: 8, change: '+2', trend: 'up' }
  ];

  // Order Forecasting Data
  const orderData = [
    { month: 'JAN', pizza: 45000, bar: 120000, others: 80000 },
    { month: 'FEB', pizza: 42000, bar: 110000, others: 75000 },
    { month: 'MAR', pizza: 65000, bar: 140000, others: 95000 },
    { month: 'APR', pizza: 58000, bar: 160000, others: 105000 },
    { month: 'MAY', pizza: 62000, bar: 180000, others: 115000 },
    { month: 'JUN', pizza: 55000, bar: 150000, others: 90000 },
    { month: 'JUL', pizza: 48000, bar: 130000, others: 85000 },
    { month: 'AUG', pizza: 52000, bar: 135000, others: 88000 },
    { month: 'SEP', pizza: 68000, bar: 170000, others: 110000 },
    { month: 'OCT', pizza: 72000, bar: 190000, others: 125000 },
    { month: 'NOV', pizza: 65000, bar: 160000, others: 100000 },
    { month: 'DEC', pizza: 58000, bar: 140000, others: 95000 }
  ];

  // Ingredients/Items Data
  const ingredientsData = [
    { name: 'Tomato Sauce', weekly: 45, daily: 8 },
    { name: 'Mozzarella', weekly: 120, daily: 18 },
    { name: 'Pepperoni', weekly: 85, daily: 12 },
    { name: 'Mushrooms', weekly: 60, daily: 9 },
    { name: 'Onions', weekly: 40, daily: 6 },
    { name: 'Bell Peppers', weekly: 35, daily: 5 },
    { name: 'Olives', weekly: 25, daily: 4 },
    { name: 'Basil', weekly: 15, daily: 2 }
  ];

  return (
    <div className="dashboard">
      {/* Realtime Users Section */}
      <div className="realtime-users">
        {realtimeData.map((item, index) => (
          <div key={index} className="realtime-card">
            <div className="realtime-label">{item.label}</div>
            <div className="realtime-value">{item.value}</div>
            <div className="realtime-change positive">{item.change}</div>
            <div className="realtime-chart">
              <TrendingUp className="chart-icon" />
            </div>
          </div>
        ))}
      </div>

      {/* Main Charts Section */}
      <div className="charts-section">
        {/* Order Forecasting Chart */}
        <div className="order-forecasting-card">
          <div className="card-header">
            <div className="card-title-section">
              <div className="card-subtitle">Statistics</div>
              <h2 className="card-title">Order Forecasting</h2>
            </div>
            <div className="timeframe-tabs">
              <button 
                className={`tab-button ${orderTimeframe === '7 days' ? 'active' : ''}`}
                onClick={() => setOrderTimeframe('7 days')}
              >
                7 days
              </button>
              <button 
                className={`tab-button ${orderTimeframe === '30 days' ? 'active' : ''}`}
                onClick={() => setOrderTimeframe('30 days')}
              >
                30 days
              </button>
              <button 
                className={`tab-button ${orderTimeframe === '12 months' ? 'active' : ''}`}
                onClick={() => setOrderTimeframe('12 months')}
              >
                12 months
              </button>
            </div>
          </div>
          
          <div className="chart-legend">
            <div className="legend-item">
              <div className="legend-dot pizza"></div>
              <span>Pizza</span>
            </div>
            <div className="legend-item">
              <div className="legend-dot bar"></div>
              <span>Bar</span>
            </div>
            <div className="legend-item">
              <div className="legend-dot others"></div>
              <span>Others</span>
            </div>
          </div>

          <div className="chart-container">
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={orderData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} domain={[0, 200000]} ticks={[0, 50000, 100000, 150000, 200000]} />
                <Tooltip 
                  formatter={(value: any, name: string) => [
                    `${value.toLocaleString()}`, 
                    name === 'pizza' ? 'Pizza' : name === 'bar' ? 'Bar' : 'Others'
                  ]}
                  labelStyle={{ color: '#333' }}
                  contentStyle={{ 
                    backgroundColor: '#fff', 
                    border: '1px solid #e9ecef', 
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                  }}
                />
                <Area 
                  type="monotone" 
                  dataKey="pizza" 
                  stroke="#E23A00" 
                  fill="url(#pizzaGradient)" 
                  strokeWidth={2}
                />
                <Area 
                  type="monotone" 
                  dataKey="bar" 
                  stroke="#FF69B4" 
                  fill="url(#barGradient)" 
                  strokeWidth={2}
                />
                <Area 
                  type="monotone" 
                  dataKey="others" 
                  stroke="#8B4513" 
                  fill="url(#othersGradient)" 
                  strokeWidth={2}
                />
                <defs>
                  <linearGradient id="pizzaGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#E23A00" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#E23A00" stopOpacity={0.1}/>
                  </linearGradient>
                  <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FF69B4" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#FF69B4" stopOpacity={0.1}/>
                  </linearGradient>
                  <linearGradient id="othersGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8B4513" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#8B4513" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Alerts Card */}
        <div className="alerts-card">
          <h3 className="alerts-title">Alerts</h3>
          <div className="alert-item">
            <AlertTriangle className="alert-icon" />
            <span className="alert-text">Tomato Sauce High Drop</span>
          </div>
        </div>
      </div>

      {/* Ingredients/Items Chart */}
      <div className="ingredients-chart-card">
        <div className="card-header">
          <div className="card-title-section">
            <h2 className="card-title">Ingredients & Items Usage</h2>
          </div>
          <div className="timeframe-tabs">
            <button 
              className={`tab-button ${ingredientsTimeframe === 'Daily' ? 'active' : ''}`}
              onClick={() => setIngredientsTimeframe('Daily')}
            >
              Daily
            </button>
            <button 
              className={`tab-button ${ingredientsTimeframe === 'Weekly' ? 'active' : ''}`}
              onClick={() => setIngredientsTimeframe('Weekly')}
            >
              Weekly
            </button>
          </div>
        </div>

        <div className="chart-container">
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={ingredientsData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip 
                formatter={(value: any, name: string) => [
                  `${value}`, 
                  name === 'weekly' ? 'Weekly' : 'Daily'
                ]}
                labelStyle={{ color: '#333' }}
                contentStyle={{ 
                  backgroundColor: '#fff', 
                  border: '1px solid #e9ecef', 
                  borderRadius: '8px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}
              />
              <Line 
                type="monotone" 
                dataKey={ingredientsTimeframe.toLowerCase()} 
                stroke="#E23A00" 
                strokeWidth={3}
                dot={{ fill: '#E23A00', strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
