import { Button, Group, Paper, SimpleGrid, Text, Textarea, TextInput } from '@mantine/core';
import bg from './bg.svg?url';
import classes from './Contact.module.css';
import { ContactIconsList } from './ContactIcons';

const Contact: React.FC = () => {
  return (
    <Paper shadow="md" radius="lg">
      <div className={classes.wrapper}>
        <div className={classes.contacts} style={{ backgroundImage: `url(${bg})` }}>
          <Text fz="lg" fw={700} className={classes.title} c="#fff">
            Coordonnées
          </Text>

          <ContactIconsList />
        </div>

        <form className={classes.form} method='POST' action="https://kwesforms.com/api/f/CVtujXdgNTh6m7RICkWo">
          <Text fz="lg" fw={700} className={classes.title}>
            Contactez moi
          </Text>

          <div className={classes.fields}>
            <SimpleGrid cols={{ base: 1, sm: 2 }}>
              <TextInput label="Nom" placeholder="Nom" name='name' />
              <TextInput label="Votre adresse e-mail" placeholder="nom@example.fr" name='email' required />
            </SimpleGrid>

            <TextInput mt="md" label="Sujet" placeholder="Sujet" required name='subject' />

            <Textarea
              mt="md"
              label="Votre message"
              placeholder="Veuillez inclure toutes les informations pertinentes"
              minRows={3}
              name='message'
            />

            <Group justify="flex-end" mt="md">
              <Button type="submit" className={classes.control}>
                Envoyer le message
              </Button>
            </Group>
          </div>
        </form>
      </div>
    </Paper>
  );
}

export default Contact;