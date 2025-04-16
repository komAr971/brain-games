install:
	npm install

link:
	npm link

brain-games:
	node bin/brain-games.js

publish: 
	npm publish --dry-run

lint: 
	npx eslint .

lint-fix:
	npx eslint --fix .

prettier:
	npx prettier --write .

