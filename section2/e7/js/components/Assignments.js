import AssignmentList from "./AssignmentList.js"

export default {
    components: {
        AssignmentList,
    },

    template: `
        <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>

        <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>
    `,

    data() {
        return {
            assignments: [
                { name: 'Finhsh project', complete: false, id: 1 },
                { name: 'Read chapter 4', complete: false, id: 2 },
                { name: 'Turn in homework', complete: false, id: 3 },
            ]
        }
    },

    computed: {
        filters() {
            return {
                completed: this.assignments.filter(a => a.complete),
                inProgress: this.assignments.filter(a => !a.complete),
            }
        },
    }
}