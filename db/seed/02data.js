/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('customer').del();

  await knex('customer').insert(
      [
        { id: 1, name: 'Ella Sanchez', email: 'ella@example.com', phone_number: '1234567890', is_active: true },
        { id: 2, name: 'Christopher Nguyen', email: 'christopher@example.com', phone_number: '2345678901', is_active: true },
        { id: 3, name: 'Aria Garcia', email: 'aria@example.com', phone_number: '3456789012', is_active: true },
        { id: 4, name: 'Logan Wright', email: 'logan@example.com', phone_number: '4567890123', is_active: true },
        { id: 5, name: 'Mila Martinez', email: 'mila@example.com', phone_number: '5678901234', is_active: true },
        { id: 6, name: 'Lucas Lee', email: 'lucas@example.com', phone_number: '6789012345', is_active: true },
        { id: 7, name: 'Avery Robinson', email: 'avery@example.com', phone_number: '7890123456', is_active: true },
        { id: 8, name: 'Scarlett Perez', email: 'scarlett@example.com', phone_number: '8901234567', is_active: true },
        { id: 9, name: 'Henry Turner', email: 'henry@example.com', phone_number: '9012345678', is_active: true },
        { id: 10, name: 'Chloe Brown', email: 'chloe@example.com', phone_number: '9123456789', is_active: true },
        { id: 11, name: 'Jackson Thomas', email: 'jackson@example.com', phone_number: '9234567890', is_active: true },
        { id: 12, name: 'Victoria Smith', email: 'victoria@example.com', phone_number: '9345678901', is_active: true },
        { id: 13, name: 'Samuel Wilson', email: 'samuel@example.com', phone_number: '9456789012', is_active: true },
        { id: 14, name: 'Penelope Johnson', email: 'penelope@example.com', phone_number: '9567890123', is_active: true },
        { id: 15, name: 'Gabriel Davis', email: 'gabriel@example.com', phone_number: '9678901234', is_active: true },
        { id: 16, name: 'Sofia Anderson', email: 'sofia@example.com', phone_number: '9789012345', is_active: true },
        { id: 17, name: 'Daniel Moore', email: 'daniel@example.com', phone_number: '9890123456', is_active: true },
        { id: 18, name: 'Liam Thomas', email: 'liam@example.com', phone_number: '9901234567', is_active: true },
        { id: 19, name: 'Evelyn Martinez', email: 'evelyn@example.com', phone_number: '9912345678', is_active: true },
        { id: 20, name: 'William Garcia', email: 'william@example.com', phone_number: '9923456789', is_active: true }
      ]

  )

};


