import React, { useEffect } from 'react'

export default function WithLogger(WrappedComponent) { // add logging logic to any component
    return function EnhancedComponent(props) {
        useEffect(() => {
            console.log(`${WrappedComponent.name} mounted/Updated`);
            return () => {
                console.log(`${WrappedComponent.name} unmounted`);
            };
        });
        console.log(`${WrappedComponent.name} rendered`);
        return <WrappedComponent {...props} />;
    };
}
