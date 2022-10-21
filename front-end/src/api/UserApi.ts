export const getUser = async () => {
    const res = await fetch('user')
    return res.json()
}

