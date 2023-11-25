# Block and Page are synomyms
class Block:
  def __init__(self, block_size, record_size):
    self.records = []
    self.block_size = block_size
    self.record_size = record_size
    self.capacity = (block_size-1) // record_size

  # creates a block from a bytearray
  def create(block_size, record_size, byte_array):
    block = Block(block_size, record_size)

    pos = 1
    for _ in range(byte_array[0]):
      rec = Record.create(record_size, byte_array[pos:pos+record_size] )
      block.add(rec.read())
      pos += record_size

    return block

  def add(self, key):
    if(not isinstance(key, str)):
       raise TypeError(f"The key must be str!")

    if(self.size() < self.capacity):
      self.records.append(Record(self.record_size, key))
    else:
      raise ValueError("The block is full!")

  def addIndex(self, index, key):
    if(not isinstance(key, str)):
       raise TypeError(f"The key must be str!")

    if(self.size() < self.capacity):
      self.records.insert(index, Record(self.record_size, key))
    else:
      raise ValueError("The block is full!")

  def remove(self, key):
    if(not isinstance(key, str)):
       raise TypeError(f"The key must be str!")

    rec = self.search(key)
    if(rec):
      return self.records.remove(rec)
    return None

  def removeIndex(self, index):
    if(not isinstance(index, int)):
       raise TypeError(f"The index must be int!")
    return self.records.pop(index)

  def removeLast(self):
    if len(self.records)>0:
      return self.records.pop()
    return None

  def read(self):
    str=""
    for rec in self.records:
      str += rec.read() + "\n"
    return str;

  def search(self, key):
    if(not isinstance(key, str)):
       raise TypeError(f"The key must be str!")

    for i in range(len(self.records)):
      if(self.getRecord(i).read()==key):
        return i
    return -1

  # returns a list of records, within the range keyA (inclusive) and KeyB (exclusive)
  def rangeSearch(self, keyA, keyB):
    if((not isinstance(keyA, str)) or (not isinstance(keyB, str))):
       raise TypeError(f"The key must be str!")

    ret = []
    for rec in self.records:
      recValue = rec.read()
      if(recValue>=keyA and recValue<keyB):
        ret.append(recValue)
    return ret

  def getRecord(self, index):
    return self.records[index]

  def size(self):
    return len(self.records)

  def isFull(self):
    return self.size()==self.capacity

  def bytes(self):
    byte_array = bytearray([0] * self.block_size)
    byte_array[0] = self.size()
    pos = 1
    for rec in self.records:
      byte_array[pos:pos+rec.size()] = rec.bytes()
      pos += rec.size()

    return byte_array