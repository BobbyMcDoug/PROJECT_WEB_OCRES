import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import LineChart from '../components/LineChart';
import BarChart from "../components/BarChart";
import ProgressionBar from "../components/ProgressionBar";
import DoughnutChart from "../components/DoughnutChart";
import RadarChart from "../components/RadarChart";
import Profil from '../components/Profil';
import ProgressBar from '../components/ProgressBar';

export default {
  title: 'WidgetTest',
};

export const linechart = () => <LineChart onClick={action('clicked')}>Line</LineChart>;
export const barchart = () => <BarChart onClick={action('clicked')}>Bar</BarChart>;
export const radarchart = () => <RadarChart onClick={action('clicked')}>Radar</RadarChart>;
export const doughnutchart = () => <DoughnutChart onClick={action('clicked')}>Donut</DoughnutChart>;
export const profil = () => <Profil onClick={action('clicked')}>Profil</Profil>;
export const progressionbar = () => <ProgressBar onClick={action('clicked')}>Progressbar</ProgressBar>;
