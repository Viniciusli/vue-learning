export default {
    template: `
        <button :class="{
                'bg-blue-500 hover:bg-blue-700 border rounded px-5 py-2 disabled:cursor-not-allowed': type === 'primary',
                'bg-purple-500 hover:bg-purple-700 border rounded px-5 py-2 disabled:cursor-not-allowed': type === 'secondary',
                'bg-red-500 hover:bg-red-700 border rounded px-5 py-2 disabled:cursor-not-allowed': type === 'warning',
                'is-processing': processing
            }">
            <iconify-icon v-show="processing" icon="svg-spinners:90-ring-with-bg"></iconify-icon>
            <slot />    
        </button>
    `,

    props: {
        type: {
            type: String,
            default: 'primary'
        },

        processing: {
            type: Boolean,
            default: false
        }
    },
}