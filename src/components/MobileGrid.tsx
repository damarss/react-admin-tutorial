import { RecordContextProvider, useListContext } from 'react-admin'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'

const MobileGrid = () => {
  const { data, isLoading } = useListContext();

  if (isLoading || data.length === 0) {
    return null;
  }

  return (
    <Box margin="0.5em">
      { data.map(record => (
        <RecordContextProvider value={record} key={record.id}>
          <Card sx={{ margin: '0.5em 0'}}>
          </Card>
        </RecordContextProvider>
      ))}
    </Box>
  )
}

export default MobileGrid
