import React, { useState } from 'react';
import { 
  Calendar, 
  Filter, 
  Search, 
  Plus, 
  ChevronRight
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  ResponsiveContainer,
  Tooltip,
  Line,
  ComposedChart
} from 'recharts';

const StaffManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Daily');

  // Staff Forecasting Data - Daily view
  const dailyData = [
    { day: 'Sat', solidOrange: 70, dottedGray: 80 },
    { day: 'Sun', solidOrange: 70, dottedGray: 80 },
    { day: 'Mon', solidOrange: 0, dottedGray: 0, dottedOrange: 110 },
    { day: 'Tue', solidOrange: 0, dottedGray: 0, dottedOrange: 95 },
    { day: 'Wed', solidOrange: 0, dottedGray: 0, dottedOrange: 80 },
    { day: 'Thu', solidOrange: 0, dottedGray: 0, dottedOrange: 60 },
    { day: 'Fri', solidOrange: 0, dottedGray: 0, dottedOrange: 90 }
  ];

  // Staff Forecasting Data - Weekly view
  const weeklyData = [
    { week: 'Week 1', solidBar: 85, dottedLine: 90 },
    { week: 'Week 2', solidBar: 0, dottedLine: 95 },
    { week: 'Week 3', solidBar: 0, dottedLine: 88 },
    { week: 'Week 4', solidBar: 0, dottedLine: 92 }
  ];

  const staffForecastingData = activeTab === 'Daily' ? dailyData : weeklyData;

  // Monthly Hours Data
  const monthlyHoursData = [
    { day: 'Mon', value: 13000 },
    { day: 'Tue', value: 30000 },
    { day: 'Wed', value: 33567 },
    { day: 'Thu', value: 20000 },
    { day: 'Fri', value: 10000 }
  ];

  // Table Data
  const tableData = [
    { name: 'Sauce Tomato', kind: 'Topping', priceDelta: '50 DZD', stock: '6 Kg' },
    { name: 'Sauce Tomato', kind: 'Sauce', priceDelta: '50 DZD', stock: '6 Kg' }
  ];

  return (
    <div className="staff-management">
      {/* Charts Row */}
      <div className="charts-row">
        {/* Staff Forecasting Card */}
        <div className="staff-card">
          <div className="card-header">
            <div className="card-title-section">
              <h2>Staff Forecasting</h2>
              <p>Average Need</p>
              <div className="metric-value">
                5 Employee / Day
                <span className="metric-change positive">+1.3%</span>
              </div>
            </div>
            <div className="chart-tabs">
              <button 
                className={`tab-button ${activeTab === 'Daily' ? 'active' : ''}`}
                onClick={() => setActiveTab('Daily')}
              >
                Daily
              </button>
              <button 
                className={`tab-button ${activeTab === 'Weekly' ? 'active' : ''}`}
                onClick={() => setActiveTab('Weekly')}
              >
                Weekly
              </button>
            </div>
          </div>
          
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={200}>
              <ComposedChart data={staffForecastingData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  dataKey={activeTab === 'Daily' ? 'day' : 'week'} 
                  axisLine={false} 
                  tickLine={false} 
                />
                <YAxis axisLine={false} tickLine={false} domain={[0, 125]} ticks={[0, 25, 50, 75, 100, 125]} />
                {/* Past days: solid orange bar */}
                <Bar dataKey="solidOrange" fill="#E23A00" radius={[0, 0, 0, 0]} maxBarSize={8} />
                {/* Past days: dotted gray bar */}
                <Bar dataKey="dottedGray" fill="url(#dottedGray)" radius={[0, 0, 0, 0]} maxBarSize={8} />
                {/* Future days: dotted orange bar */}
                <Bar dataKey="dottedOrange" fill="url(#dottedOrange)" radius={[0, 0, 0, 0]} maxBarSize={8} />
                
                {/* Define patterns for dotted bars */}
                <defs>
                  <pattern id="dottedGray" patternUnits="userSpaceOnUse" width="4" height="4">
                    <rect width="4" height="4" fill="#E0E0E0"/>
                    <rect width="2" height="4" fill="transparent"/>
                  </pattern>
                  <pattern id="dottedOrange" patternUnits="userSpaceOnUse" width="4" height="4">
                    <rect width="4" height="4" fill="#E23A00"/>
                    <rect width="2" height="4" fill="transparent"/>
                  </pattern>
                </defs>
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Monthly Hours Card */}
        <div className="staff-card">
          <div className="card-header">
            <div className="card-title-section">
              <h2>Monthly Hour Average</h2>
              <p>Statistics</p>
            </div>
          </div>
          
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={monthlyHoursData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="day" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} domain={[0, 40000]} ticks={[0, 10000, 20000, 30000, 40000]} />
                <Tooltip 
                  formatter={(value: any) => [`$${value.toLocaleString()}`, 'Value']}
                  labelStyle={{ color: '#333' }}
                  contentStyle={{ 
                    backgroundColor: '#fff', 
                    border: '1px solid #e9ecef', 
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                  }}
                />
                <Bar dataKey="value" fill="#E23A00" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="search-filter-bar">
        <button className="control-button">
          <Calendar className="nav-icon" />
          Today
        </button>
        <button className="control-button">
          <Filter className="nav-icon" />
        </button>
        <div className="search-input-group">
          <Search className="nav-icon" />
          <input type="text" placeholder="Q Search" />
        </div>
        <button className="add-button">
          <Plus className="nav-icon" />
          Add New Items +
        </button>
      </div>

      {/* Table Section */}
      <div className="staff-card">
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>
                  Name
                  <div className="sort-icon">◆</div>
                </th>
                <th>
                  Kind
                  <div className="sort-icon">◆</div>
                </th>
                <th>
                  Price Delta
                  <div className="sort-icon">◆</div>
                </th>
                <th>
                  Stock
                  <div className="sort-icon">◆</div>
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index}>
                  <td>{row.name}</td>
                  <td>{row.kind}</td>
                  <td>{row.priceDelta}</td>
                  <td>{row.stock}</td>
                  <td>
                    <ChevronRight className="nav-icon" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StaffManagement;
