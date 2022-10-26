
import { Model , Table , Column , DataType , BelongsTo , ForeignKey} from "sequelize-typescript";
import { User } from "src/users/users.model";

interface CreatePostAttr {
    title: string;
    decription: string;
    userId: number;
}
@Table({tableName: 'posts'})
export class Posts extends Model<Posts ,CreatePostAttr> {
    @Column({type: DataType.INTEGER , unique: true, autoIncrement: true , primaryKey: true})
    id:number;

    @Column({type: DataType.STRING ,  allowNull: false})
    title: string;

    @Column({type: DataType.STRING ,  allowNull: false})
    decription: string;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number;

    @BelongsTo(() => User)
    author: User;
}