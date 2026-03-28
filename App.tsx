import { useState } from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { BottomNav, TabName } from '@/components/BottomNav';
import { ScreenContent } from '@/components/ScreenContent';

import './global.css';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabName>('Dashboard');

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-white" edges={['top']}>
        <View className="flex-1">
          <ScreenContent title={activeTab} path="App.tsx" />
        </View>
        <BottomNav activeTab={activeTab} onTabPress={setActiveTab} />
      </SafeAreaView>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
