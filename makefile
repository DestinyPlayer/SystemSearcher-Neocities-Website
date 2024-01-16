DATE := $(shell /bin/date)
site: _site/wiki/prismofstars/components/update.html
	sed -e "s/__LAST_UPDATED__/$(DATE)/"