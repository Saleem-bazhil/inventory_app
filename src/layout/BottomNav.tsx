import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export type TabName = 'Dashboard' | 'Materials' | 'Customers' | 'Transactions' | 'Reports';

interface BottomNavProps {
  activeTab: TabName;
  onTabPress: (tab: TabName) => void;
}

const tabs: { name: TabName; icon: (active: boolean) => React.ReactNode }[] = [
  {
    name: 'Dashboard',
    icon: (active) => (
      <Ionicons name={active ? 'grid' : 'grid-outline'} size={22} color={active ? '#4F46E5' : '#9CA3AF'} />
    ),
  },
  {
    name: 'Materials',
    icon: (active) => (
      <MaterialCommunityIcons
        name={active ? 'diamond-stone' : 'diamond-outline'}
        size={22}
        color={active ? '#4F46E5' : '#9CA3AF'}
      />
    ),
  },
  {
    name: 'Customers',
    icon: (active) => (
      <Ionicons
        name={active ? 'people' : 'people-outline'}
        size={22}
        color={active ? '#4F46E5' : '#9CA3AF'}
      />
    ),
  },
  {
    name: 'Transactions',
    icon: (active) => (
      <MaterialCommunityIcons
        name={active ? 'swap-horizontal-bold' : 'swap-horizontal'}
        size={22}
        color={active ? '#4F46E5' : '#9CA3AF'}
      />
    ),
  },
  {
    name: 'Reports',
    icon: (active) => (
      <Ionicons
        name={active ? 'bar-chart' : 'bar-chart-outline'}
        size={22}
        color={active ? '#4F46E5' : '#9CA3AF'}
      />
    ),
  },
];

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabPress }) => {
  return (
    <View className="flex-row border-t border-gray-200 bg-white px-2 pb-5 pt-2">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.name;
        return (
          <Pressable
            key={tab.name}
            onPress={() => onTabPress(tab.name)}
            className="flex-1 items-center justify-center py-1">
            {tab.icon(isActive)}
            <Text
              className={`mt-1 text-[10px] ${isActive ? 'font-semibold text-indigo-600' : 'text-gray-400'}`}>
              {tab.name}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};
