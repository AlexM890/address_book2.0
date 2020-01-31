export default (contacts, {name,email,sortBy}) => {
    return contacts.filter((item) => {
        const nameMatch = item.name.toLowerCase().includes(name.toLowerCase())
        const emailMatch = item.email.toLowerCase().includes(email.toLowerCase())
        return nameMatch && emailMatch
    }).sort((a,b) =>{
        if(sortBy === 'name'){
            return a.name < b.name ? -1 : a.name > b.name ? 1: 0
        }else if(sortBy === 'email'){
            return a.email < b.email ? -1 : a.email > b.email ? 1: 0
        }
    })
}