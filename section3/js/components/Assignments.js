import AssignmentList from "./AssignmentList.js"
import AssignmentCreate from "./AssignmentCreate.js"

export default {
    components: {
        AssignmentList,
        AssignmentCreate,
    },

    template: `
        <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>
        <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>

        <assignment-create @add="add"></assignment-create>
    `,

    data() {
        return {
            assignments: [
                { name: 'Finhsh project', complete: false, id: 1 },
                { name: 'Read chapter 4', complete: false, id: 2 },
                { name: 'Turn in homework', complete: false, id: 3},
            ],
            newAssignment: '',
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