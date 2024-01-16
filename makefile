DATE := $(shell /bin/date)
sed -i "s/__LAST_UPDATED__/=$(DATE)/" /_site/wiki/prismofstars/components/update.html