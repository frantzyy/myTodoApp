# myTodoApp

Notes while learning angularjs, bootstrap, sass, webpack, git, and other web development tools

* [myTodoApp Github Pages](https://frantzyy.github.io/myTodoApp/)
* [myTodoApp] (https://frantzyy.github.io/myTodoApp/app/app.html#/list)


## Markdown
[Stackedit editor](https://stackedit.io/editor)
[Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#lists)

## Git

### Learning 

[Git Docs](https://git-scm.com/doc)

[Code Academy](https://www.codecademy.com/learn)

[Code Academy YouTube](https://www.youtube.com/channel/UCVTlvUkGslCV_h-nSAId8Sw)

[Tutorial 1 - Git basics](https://www.youtube.com/watch?v=0fKg7e37bQE)

[Tutorial 2 - Git pull requests](https://www.youtube.com/watch?v=oFYyTZwMyAg)


### GitHub - keeping master in sync with gh-pages
1. git checkout master
2. git status
3. git commit -m "Committing changes to master"
4. git push origin master
5. git checkout gh-pages
6. git rebase master # or merge, whatever your preference
7. git push origin gh-pages
8. git checkout master

[Tips to sync your master to gh-pages](http://brettterpstra.com/2012/09/26/github-tip-easily-sync-your-master-to-github-pages/)


[Keep gh-pages insync with master](http://lea.verou.me/2011/10/easily-keep-gh-pages-in-sync-with-master/)


### Typical workflow

1. git pull
2. make changes
3. git add -A (add all)
.. 1. git status (useful to verify you know what you are going to commit)
4. git commit -m ''
5. git pull (sync up with master)
6. if you get a merge conflict, you need to resolve the conflict 
.. 1. resolve conflict
.. 2. git commit
.. 3. use esc :wq to write and quit
7. else git push


### Branching/merging

1. git branch (displays available branches)
2. git branch feature1 (creates a new branch)
3. make your change
4. git add -A
5. git commit -m
6. git checkout master (go back to branch you are merging to hasn't changed)
7. git pull
8. git checkout feature1
9. git merge master (or whatever branch you are going to)
10. git add -A
11. git commit -m
12. git push


### Git Commit History

[Git Commit History Docs](https://git-scm.com/book/en/v2/Git-Basics-Viewing-the-Commit-History)

* basic
git log

* pretty one line with hash
git log --pretty=oneline

* format with user name
git log --pretty=format:"%h - %an, %ar : %s"

* timeframe
git log --since=2.weeks


### Amend

testing amend


## Podcasts

[Adventures in Angular](https://devchat.tv/devchattv_show/adventures-in-angular)

[Codeschool 5JS](https://fivejs.codeschool.com/)



