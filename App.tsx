import { useState } from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { BottomNav, TabName } from './src/layout/BottomNav';

import Dashboard from './src/screens/Dashboard';
import Materials from './src/screens/Materials';
import Customers from './src/screens/Customers';
import Transactions from './src/screens/Transactions';
import Reports from './src/screens/Reports';

import './global.css';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabName>('Dashboard');

  const renderScreen = () => {
    switch (activeTab) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Materials':
        return <Materials />;
      case 'Customers':
        return <Customers />;
      case 'Transactions':
        return <Transactions />;
      case 'Reports':
        return <Reports />;
      default:
        return null;
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-white" edges={['top']}>
        <View className="flex-1">
          {renderScreen()}
        </View>

        <BottomNav activeTab={activeTab} onTabPress={setActiveTab} />
      </SafeAreaView>

      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}