DATE := $(shell /bin/date)
sed -i 's%__LAST_UPDATED__% c $(DATE)%' /_site/wiki/prismofstars/components/update.html