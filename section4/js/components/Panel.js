export default {
    template: `
        <div :class="{
            'bg-gray-700 border border-gray-600 p-4 rounded-lg': true,
            'bg-gray-700 border-gray-600 text-white': theme === 'dark',
            'bg-white border-gray-300 text-black': theme === 'light',

        }">
            <h2 v-if="$slots.heading" class="font-bold mb-2">
                <slot name="heading" />
            </h2>

            <slot />

            <footer v-if="$slots.footer" class="border-gray-600 border-t mt-4 pt-4 text-sm">
                <slot name="footer" />
            </footer>
        </div>
    `,

    props: {
        theme: { type: String, default: 'dark' }
    }
}