export default {
    template: `
        <li>
            <label class="p-3 flex justify-between items-center gap-3">
                {{ assignment.name }}

                <input type="checkbox" v-model="assignment.complete">
            </label>
        </li>
    `,

    props: {
        assignment: Object,
    }
}