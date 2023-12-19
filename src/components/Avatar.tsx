import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{
    hasBorders?: boolean;
}

export function Avatar({hasBorders = true, ...props}:AvatarProps){
    return (
        <img 
            className={hasBorders ? styles.avatar : styles.avatarWithoutBorders} 
            {...props}
        />
    )
}