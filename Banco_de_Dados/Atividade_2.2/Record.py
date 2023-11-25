#The first byte of the record stores the size.
#The string values are encoded using utf-8,
#which can use more bytes than the number of
#characters of the string.
class Record:
  def __init__(self, record_size, value=""):
    self.byte_array = bytearray([0] * record_size)
    self.write(value)

  # creates a record from a bytearray
  def create(record_size, byte_array):
    string_bytes = byte_array[1:1+byte_array[0]]
    return Record(record_size, string_bytes.decode('utf-8'))

  def write(self, value):
    if(not isinstance(value, str)):
       raise TypeError(f"The value must be str!")

    string_bytes = value.encode('utf-8')

    if (1+len(string_bytes))> len(self.byte_array):
      raise ValueError(f"Record overflow!")

    self.byte_array[0] = len(string_bytes)
    self.byte_array[1:1+len(string_bytes)] = string_bytes

  def read(self):
    string_bytes = self.byte_array[1:1+self.byte_array[0]]
    return string_bytes.decode('utf-8')

  def size(self):
    return len(self.byte_array)

  def bytes(self):
    return self.byte_array.copy()

  def __str__(self):
    return f"value:{self.read()}, bytes occupied:{1+self.byte_array[0]} , capacity:{self.size()}"