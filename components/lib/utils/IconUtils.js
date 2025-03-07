import * as React from 'react';
import { classNames } from './ClassNames';
import ObjectUtils from './ObjectUtils';
import UniqueComponentId from './UniqueComponentId';

export default class IconUtils {
    static getJSXIcon(icon, iconProps = {}, options = {}) {
        let content = null;

        if (icon !== null) {
            const iconType = typeof icon;
            const className = classNames(iconProps.className, iconType === 'string' && icon);

            content = <span {...iconProps} className={className} key={UniqueComponentId('icon')} />;

            if (iconType !== 'string') {
                const defaultContentOptions = {
                    iconProps: iconProps,
                    element: content,
                    ...options
                };

                return ObjectUtils.getJSXElement(icon, defaultContentOptions);
            }
        }

        return content;
    }
}
