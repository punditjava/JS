abstract class Figure
{
    image;
    x;
    y;

    constructor (image, x, y) 
    {
        this.image = image;
        this.x = x;
        this.y = y;
    }

    /**
    * It is how figure can move.
    */
    abstract move();

    /**
    * get x kooordinate
    */
    public getX()
    {
        return this.x;
    }
    /**
     * get y kooordinate
     */
    public getY() {
       return this.y; 
    }
}