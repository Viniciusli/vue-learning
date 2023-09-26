import Assignments from "./Assignments.js"
import Panel from "./Panel.js"

export default {
    components: { Assignments, Panel },

    template: `
        <div class="grid gap-8">
            <assignments></assignments>
        </div>
    `,
}