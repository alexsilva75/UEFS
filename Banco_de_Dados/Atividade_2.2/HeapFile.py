import os



class HeapFile:

  def __init__(self, filename, block_size, record_size):
    self.filename = filename
    self.block_size = block_size
    self.record_size = record_size

    #print(f"os.path.abspath(filename): {os.path.abspath(filename)}")

    if(os.path.exists(filename)):
      self.blocks = os.path.getsize(filename)//block_size
    else:
      self.blocks = 1
      with open(self.filename, "wb") as file:
        file.write(Block(block_size, record_size).bytes())

  def add(self, key):
    block = self.read(self.blocks-1)

    if(block.isFull()):
      self.blocks+=1
      block = Block(self.block_size, self.record_size)

    block.add(key)
    self.write(self.blocks-1, block)

  def remove(self, key):
    (block_id, rec_id) = self.search(key)
    if block_id>=0:
      block = self.read(block_id)
      block.removeIndex(rec_id)
      self.write(block_id, block)

  def scan(self, output=True):
    for i in range(self.blocks):
      if output:
        print(self.read(i).read())
      else:
        self.read(i).read()

  # returns the record, containing the key
  def search(self, key):
    for i in range(self.blocks):
      block = self.read(i)
      rec_id = block.search(key)

      if(rec_id>=0):
        return (i, rec_id)
    return (-1, -1)

  # returns a list of records, within the range keyA (inclusive) and KeyB (exclusive)
  def rangeSearch(self, keyA, keyB):
    result = []
    for i in range(self.blocks):
      result += self.read(i).rangeSearch(keyA, keyB)
    return result

  def write(self, block_id, block):
    if(not isinstance(block, Block)):
       raise TypeError(f"The block must by of Block type!")

    with open(self.filename, "r+b") as file:
      file.seek(self.block_size * (block_id))
      file.write(block.bytes())

  def read(self, block_id):
    with open(self.filename, "r+b") as file:
      file.seek(self.block_size *(block_id))
      byte_array = file.read(self.block_size)
      return Block.create(self.block_size, self.record_size, byte_array)