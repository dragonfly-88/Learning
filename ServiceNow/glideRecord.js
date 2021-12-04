
// Object containing records
// Used for database operations
// Executed on Server Side
// Similar to SQL commands: fetch, update, delete some records stb
// Not recommended to use on Client Side (eg. client script, ui policy)


//Example: Get more rows

var gr = new GlideRecord("table_name");
gr.addQuery("field_name", "field_value");
gr.query();
  while (gr.next()) {
    gs.info("Row: " + gr.getValue("field_name"));
  }


//Example: Get one row back

var gr = new GlideRecord("table_name");
gr.get("sys_id");
  gr.getValue();



//Example: New business rule

var gr = new GlideRecord('incident');
var state5 = gr.addQuery('state', '5');
state5.addOrCondition('state', '6')
//gr.addQuery('short_description', 'test');

var countR = gr.getRowCount();
while(gr.next()) {
gs.addInfoMessage('The incident number: ' + gr.number + gr.state.getDisplayValue() + 'row count: ' + countR);

gr.get(current.sys_id);  // fetch single record!!!

//gr.addEncodedQuery('active=true^caller_id=46d96f57a9fe198101947a9620895886');     //copies the filter   


// aggregation -- GlideAggregate() does the trick better than getRowCount()

var agg = new GlideAggregate('incident');
var agg.addAggregate('COUNT');
agg.query();
var countR = 0;
if (agg.next()) {
countR = agg.getAggregate('COUNT');
}
gs.addInfoMessage('The number of records: ' + countR);

