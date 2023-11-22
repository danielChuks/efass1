('');
import React from 'react';

import GlMapingHeader from '../GlMapping/GlMapingHeader';
import { AdjustmentContent } from './AdjustmentContent';
import BaseLayout from '../../components/BaseLayout';
import { DASHBOARD_PAGES } from '../../enums';

export const Adjustments = () => {
    return (
        <BaseLayout page={DASHBOARD_PAGES.ADJUSTMENTS}>
            <GlMapingHeader />
            <AdjustmentContent />
        </BaseLayout>
    );
};
//
