import { getChores } from "./chores/ChoreProvider.js"
import { getFamilyMembers } from "./familyMembers/FamilyProvider.js"
import { getFamilyChores } from "./familyChoreProvider/FamilyChoreProvider.js"
import { FamilyList } from "./familyMembers/FamilyList.js"

getChores()
    .then(getFamilyMembers)
    .then(getFamilyChores)
    .then(FamilyList)