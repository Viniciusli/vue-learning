import AssignmentList from "./AssignmentList.js"
import AssignmentCreate from "./AssignmentCreate.js"

export default {
    components: {
        AssignmentList,
        AssignmentCreate,
    },

    template: `
        <div class="flex gap-8">
            <assignment-list
                :assignments="filters.inProgress"
                title="In Progress"
            >
                <assignment-create @add="add"></assignment-create>
            </assignment-list>

            <div v-if="showList">
                <assignment-list
                    :assignments="filters.completed"
                    title="Completed"
                    can-toggle=true
                    @toggle="showList = !showList"
                >
                    <assignment-create @add="add"></assignment-create>
                </assignment-list>
            </div>
        </div>

    `,

    data() {
        return {
            assignments: [],
            newAssignment: '',
            showList: true,
        }
    },

    computed: {
        filters() {
            return {
                completed: this.assignments.filter(a => a.complete),
                inProgress: this.assignments.filter(a => !a.complete),
            }
        },
    },

    created() {
        fetch('http://localhost:3000/assignments')
            .then(response => response.json())
            .then(assignments => {
                this.assignments = assignments;
            })
    },

    methods: {
        add(name) {
            this.assignments.push({
                name: name,
                complete: false,
                id: this.assignments.length + 1
            })
        }
    },
}