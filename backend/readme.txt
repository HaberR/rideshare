To delete all indexed things:

curl http://localhost:8983/solr/rideshare/update?commit=true -d '
<delete><query>*:*</query></delete>'


