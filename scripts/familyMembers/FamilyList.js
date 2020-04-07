import { useChores } from "../chores/ChoreProvider.js"
import FamilyMember from "./FamilyMember.js"
import { useFamilyChores } from "../familyChoreProvider/FamilyChoreProvider.js"
import { useFamilyMembers } from "./FamilyProvider.js"




const contentTarget = document.querySelector(".family")

export const FamilyList = () => {
    const chores = useChores()
    const people = useFamilyMembers()
    const peopleChores = useFamilyChores()

    const render = () => {
        contentTarget.innerHTML = people.map(person => {
            // Find related chore ids
            let relatedChores = peopleChores.filter(pc => pc.familyMemberId === person.id)

            // Convert the array from relationship objects to chore objects
            relatedChores = relatedChores.map(rc => {
                return chores.find(chore => chore.id === rc.choreId)
            })

            // Get HTML representation of product
            const html = FamilyMember(person, relatedChores)

            return html
        }).join("")
    }

    render()
}
