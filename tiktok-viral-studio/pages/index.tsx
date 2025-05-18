import { useState } from 'react';
import {
  Box,
  Button,
  Heading,
  Input,
  Spinner,
  Stack,
  Text,
} from '@chakra-ui/react';

const Home = () => {
  const [limit, setLimit] = useState(5);
  const [schedule, setSchedule] = useState('18:00');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const goViral = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/go-viral', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ limit, schedule }),
      });
      const data = await res.json();
      setResult(data);
    } catch (err: any) {
      setResult({ error: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box p={4}>
      <Heading mb={4}>TikTok “Go Viral” Engine</Heading>
      <Stack spacing={4} maxW="md">
        <Box>
          <Text>Number of clips to fetch:</Text>
          <Input
            type="number"
            value={limit}
            onChange={(e) => setLimit(Number(e.target.value))}
          />
        </Box>
        <Box>
          <Text>Schedule time (HH:MM):</Text>
          <Input
            type="time"
            value={schedule}
            onChange={(e) => setSchedule(e.target.value)}
          />
        </Box>
        <Button colorScheme="teal" onClick={goViral} disabled={loading}>
          {loading ? <Spinner size="sm" /> : 'Go Viral!'}
        </Button>
        {result && (
          <Box mt={4} p={2} borderWidth={1} borderRadius="md">
            <pre>{JSON.stringify(result, null, 2)}</pre>
          </Box>
        )}
      </Stack>
    </Box>
  );
};

export default Home;