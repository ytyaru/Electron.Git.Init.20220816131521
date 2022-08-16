class Git {
    constructor() {
        this.branch = `master`
    }
    async init(repo) {
        console.log('Git.init()')
        const exists = await window.myApi.exists(`dst/${repo}/.git`)
        console.log(exists)
        if(!exists) {
            let res = await window.myApi.shell(`cd "dst/"; mkdir "${repo}"; cd "${repo}"; git init;`)
            // Initialized empty Git repository in /tmp/work/Electron.GitHub.API.20220816131521/dst/mytestrepo/.git/
            console.log(res.stdout)
        } else {
            console.log(`dst/${repo}/.git は既存のためgit initしません。`)
        }
    }
    /*
    async push(options) {
        // リポジトリがなければ作成する(init)
        // add, commit, push
        let res = await window.myApi.shell(`cd ./repo/${options.repository}`)
        console.debug(res.stdout)
        this.#init()
    }
    async #add() {
        await window.myApi.shell(`git add .`)
    }
    async #addList() {
        await window.myApi.shell(`git add -n .`)
    }
    async #commit(message) {
        await window.myApi.shell(`git commit -m '${message}'`)
    }
    async #remoteAddOrigin() {
        await window.myApi.shell(`git remote add origin "https://${username}:${token}@github.com/${username}/${repo}.git"`)
    }
    async #remoteSetUrlOrigin() {
        await window.myApi.shell(`git remote set-url origin "https://${username}:${token}@github.com/${username}/${repo}.git"`)
    }
    async #push() {
        await window.myApi.shell(`git push origin ${this.branch}`)
    }
    async #setUser(username, email, isLocal=false) {
        const opt = '--' + ((isLocal) ? 'global' : 'local')
        await window.myApi.shell(`git config ${opt} user.name '${username}'`)
        await window.myApi.shell(`git config ${opt} user.email '${email}'`)
    }
    */
}
