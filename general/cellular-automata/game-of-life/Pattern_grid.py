import argparse
import numpy as np

# setting up the values for the grid
ON = 255
OFF = 0
vals = [ON, OFF]


def randomGrid(N):

    """returns a grid of NxN random values"""
    return np.random.choice(vals, N*N, p=[0.2, 0.8]).reshape(N, N)

def addGlider(i, j, grid):

    """adds a glider with top left cell at (i, j)"""
    glider = np.array([[0,    0, 255], 
                       [255,  0, 255], 
                       [0,  255, 255]])
    grid[i:i+3, j:j+3] = glider

def addGosperGliderGun(i, j, grid):

    """adds a Gosper Glider Gun with top left
       cell at (i, j)"""
    gun = np.zeros(11*38).reshape(11, 38)

    gun[5][1] = gun[5][2] = 255
    gun[6][1] = gun[6][2] = 255

    gun[3][13] = gun[3][14] = 255
    gun[4][12] = gun[4][16] = 255
    gun[5][11] = gun[5][17] = 255
    gun[6][11] = gun[6][15] = gun[6][17] = gun[6][18] = 255
    gun[7][11] = gun[7][17] = 255
    gun[8][12] = gun[8][16] = 255
    gun[9][13] = gun[9][14] = 255

    gun[1][25] = 255
    gun[2][23] = gun[2][25] = 255
    gun[3][21] = gun[3][22] = 255
    gun[4][21] = gun[4][22] = 255
    gun[5][21] = gun[5][22] = 255
    gun[6][23] = gun[6][25] = 255
    gun[7][25] = 255

    gun[3][35] = gun[3][36] = 255
    gun[4][35] = gun[4][36] = 255

    grid[i:i+11, j:j+38] = gun

def addExploder(i, j, grid):
    """
    Adds an 'exploding' expanding pattern with top-left at (i, j)
    """
    bomb = np.array([
        [0,    255, 255, 255,    0],
        [255,   0,   0,   0,  255],
        [255,   0,  255,  0,  255],
        [255,   0,   0,   0,  255],
        [0,    255, 255, 255,   0],
    ])
    grid[i:i+5, j:j+5] = bomb 

def addQuadExploder(center_i, center_j, grid):
    """
    Places 4 exploders in a cross layout centered around (center_i, center_j).
    """
    offsets = [(-10, 0), (10, 0), (0, -10), (0, 10)]
    for dx, dy in offsets:
        addExploder(center_i + dx, center_j + dy, grid)

def addNegativeSpaceship(i, j, grid):
    """
    Adds a Negative Spaceship at position (i, j).
    Pattern size: 11 rows x 21 cols.
    """
    pattern = np.array([
        [0,255,0,0,255,255,0,0,255,255,0,0,255,255,0,0,255,255,0,0,0],
        [255,255,0,255,0,255,0,255,0,255,0,255,0,255,0,255,0,255,0,0,0],
        [0,255,0,255,255,0,255,255,0,255,255,0,255,255,0,255,255,0,0,0,0],
        [0,255,0,0,255,255,0,0,255,255,0,0,255,255,0,0,255,255,0,0,0],
    ])
    for row_offset, row in enumerate(pattern):
        for col_offset, val in enumerate(row):
            if i + row_offset < grid.shape[0] and j + col_offset < grid.shape[1]:
                grid[i + row_offset, j + col_offset] = val


def update(frameNum, img, grid, N):

    # copy grid since we require 8 neighbors 
    # for calculation and we go line by line 
    newGrid = grid.copy()
    for i in range(N):
        for j in range(N):

            # compute 8-neighbor sum
            # using toroidal boundary conditions - x and y wrap around 
            # so that the simulation takes place on a toroidal surface.
            total = int((grid[i, (j-1)%N] + grid[i, (j+1)%N] + 
                         grid[(i-1)%N, j] + grid[(i+1)%N, j] + 
                         grid[(i-1)%N, (j-1)%N] + grid[(i-1)%N, (j+1)%N] + 
                         grid[(i+1)%N, (j-1)%N] + grid[(i+1)%N, (j+1)%N])/255)

            # apply Conway's rules
            if grid[i, j]  == ON:
                if (total < 2) or (total > 3):
                    newGrid[i, j] = OFF
            else:
                if total == 3:
                    newGrid[i, j] = ON

    # update data
    img.set_data(newGrid)
    grid[:] = newGrid[:]
    return img,
