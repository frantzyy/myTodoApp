# myTodoApp


Notes while learning angularjs, bootstrap, sass, webpack, git, and other web development tools

## Git

### Keeping master in sync with gh-pages
1. git checkout master
2. git status
3. git commit -m "Committing changes to master"
4. git push origin master
5. git checkout gh-pages
6. git rebase master # or merge, whatever your preference
7. git push origin gh-pages
8. git checkout master

[http://brettterpstra.com/2012/09/26/github-tip-easily-sync-your-master-to-github-pages/](http://brettterpstra.com/2012/09/26/github-tip-easily-sync-your-master-to-github-pages/)


[http://lea.verou.me/2011/10/easily-keep-gh-pages-in-sync-with-master/](http://lea.verou.me/2011/10/easily-keep-gh-pages-in-sync-with-master/)

### Code Academy

[Tutorial 1 - Git basics](https://www.youtube.com/watch?v=0fKg7e37bQE)

[Tutorial 2 - Git pull requests](https://www.youtube.com/watch?v=oFYyTZwMyAg)

## Typical workflow
1. git pull
2. make changes
3. git add -A (add all)
4. git commit -m ''
5. git pull (sync up with master)
6. if you get a merge conflict, you need to resolve the conflict 
.. 1. resolve conflict
.. 2. git commit
.. 3. use esc :wq to write and quit
7. else git push
