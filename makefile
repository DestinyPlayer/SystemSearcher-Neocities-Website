DATE := $(shell /bin/date)
site: /_site/wiki/prismofstars/components/updates.html
	sed -i "s%__LAST_UPDATED__% c $(DATE)%" /_site/wiki/prismofstars/components/updates.html