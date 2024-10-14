import { extendTailwindMerge } from 'tailwind-merge';

// Extend twmerge with your custom Tailwind config
const tw = extendTailwindMerge({
    extend: {
        theme: {
            borderRadius: ['10'],
        },
    },
});

export default tw;
