exports.up = function(knex, Promise) {
  return knex.schema.createTable("students", function(tbl) {
    tbl.increments();

    tbl
      .string("name")
      .notNullable()
      .unique();
    
    tbl
      .integer("cohort_id")
      .notNullable()
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("students");
};
