"use client";

import { useEffect, useState } from 'react';

export function Header() {
    const Ali = [];
    const [sli , setAli] = useState<number>();
    useEffect(() => {
        Ali.push('q')
        setAli(1);
    }, []);
    return <div>header</div>;
}
