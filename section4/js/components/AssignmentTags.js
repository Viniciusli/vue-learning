export default {
    template: `
        <div class="flex gap-3">
            <button
                @click="$emit('change', tag)"
                v-for="tag in tags"
                class="border rounded px-1 py-px text-sm"
                :class="{
                    'border-blue-500 text-blue-500': tag === currentTag
                }"
            >{{ tag }}</button>
        </div>
    `,

    props: {
        initialTags: Array,
        currentTag: String,
    },

    computed: {
        tags() {
            return ['all', ...new Set(this.initialTags)]
        },
    }
}