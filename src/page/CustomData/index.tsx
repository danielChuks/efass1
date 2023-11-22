('');

import React from 'react';

import GlMapingHeader from '../GlMapping/GlMapingHeader';
import CustomDataContent from './CustomDataContent';
import BaseLayout from '../../components/BaseLayout';
import { DASHBOARD_PAGES } from '../../enums';

export const CustomData = () => {
    return (
        <BaseLayout page={DASHBOARD_PAGES.CUSTOM_DATA}>
            <GlMapingHeader />
            <CustomDataContent />
        </BaseLayout>
    );
};
