exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("students")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("students").insert([
        { name: "Jonas", cohort_id: 1 },
        { name: "Joe", cohort_id: 2 },
        { name: "Will", cohort_id: 3 }
      ]);
    });
};
