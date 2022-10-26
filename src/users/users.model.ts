
import { Model , Table , Column ,DataType , HasMany} from "sequelize-typescript";
import { Posts } from "src/posts/posts.model";
interface UserCreateAttr {
    email: string;
    password: string;
}
@Table({tableName: 'users'})
export class User extends Model<User, UserCreateAttr> {
    
    @Column({type: DataType.INTEGER , unique: true, autoIncrement: true , primaryKey: true})
    id:number;

    @Column({type: DataType.STRING , unique: true, allowNull: false})
    email: string;

    @Column({type: DataType.STRING ,  allowNull: false})
    password: string;

    @HasMany(() => Posts)
    posts: Posts[];
}