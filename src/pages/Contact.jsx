import { Button, PageContainer } from '@/components';

const Contact = () => {
  return (
    <PageContainer>
      Want to say hi?
      <Button
        sx={{ mt: 3 }}
        href="mailto:sarpkavalcioglu@gmail.com?subject=Hi Sarp"
        target="_blank"
      >
        Send me a message
      </Button>
    </PageContainer>
  );
};

export default Contact;
