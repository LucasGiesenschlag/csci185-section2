import { createClient } from 'pexels';

const client = createClient('4AVdy5HPnBYHXDG7PGHapbkkz3A3oKXZ59FA3k6v0siLfSUbXVVWr88j');

client.photos.show({ id: 2499611 }).then(photo => {});
