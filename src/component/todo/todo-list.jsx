import Checkbox from "./checkbox";
import { ListContainer, ListContent, ListItem, ListItems } from "./styles";

export default function TodoList() {
    return (
        <ListContainer>
            <ListItems>
                <ListItem>
                    <Checkbox checked={true} onChecked={() => {}} uniqueID={1} />
                    <ListContent>
                        <h2>Washing clothers</h2>
                        <p>
                            Doing some laundry you dummy
                        </p>
                    </ListContent>
                </ListItem>
                <ListItem>
                    <Checkbox checked={false} onChecked={() => {}} uniqueID={1} />
                    <ListContent>
                        <h2>Washing clothers</h2>
                        <p>
                            Doing some laundry you dummy
                        </p>
                    </ListContent>
                </ListItem>
                <ListItem>
                    <Checkbox checked={true} onChecked={() => {}} uniqueID={1} />
                    <ListContent checked={true}>
                        <h2>Washing clothers</h2>
                        <p>
                            Doing some laundry you dummy
                        </p>
                    </ListContent>
                </ListItem>
                <ListItem>
                    <Checkbox checked={true} onChecked={() => {}} uniqueID={1} />
                    <ListContent checked={true}>
                        <h2>Washing clothers</h2>
                        <p>
                            Doing some laundry you dummy
                        </p>
                    </ListContent>
                </ListItem>
                <ListItem>
                    <Checkbox checked={true} onChecked={() => {}} uniqueID={1} />
                    <ListContent checked={true}>
                        <h2>Washing clothers</h2>
                        <p>
                            Doing some laundry you dummy
                        </p>
                    </ListContent>
                </ListItem>
                <ListItem>
                    <Checkbox checked={true} onChecked={() => {}} uniqueID={1} />
                    <ListContent checked={true}>
                        <h2>Washing clothers</h2>
                        <p>
                            Doing some laundry you dummy
                        </p>
                    </ListContent>
                </ListItem>
                <ListItem>
                    <Checkbox checked={true} onChecked={() => {}} uniqueID={1} />
                    <ListContent checked={true}>
                        <h2>Washing clothers</h2>
                        <p>
                            Doing some laundry you dummy
                        </p>
                    </ListContent>
                </ListItem>
                <ListItem>
                    <Checkbox checked={true} onChecked={() => {}} uniqueID={1} />
                    <ListContent checked={true}>
                        <h2>Washing clothers</h2>
                        <p>
                            Doing some laundry you dummy
                        </p>
                    </ListContent>
                </ListItem>
                <ListItem>
                    <Checkbox checked={true} onChecked={() => {}} uniqueID={1} />
                    <ListContent checked={true}>
                        <h2>Washing clothers</h2>
                        <p>
                            Doing some laundry you dummy
                        </p>
                    </ListContent>
                </ListItem>
                <ListItem>
                    <Checkbox checked={true} onChecked={() => {}} uniqueID={1} />
                    <ListContent checked={true}>
                        <h2>Washing clothers</h2>
                        <p>
                            Doing some laundry you dummy
                        </p>
                    </ListContent>
                </ListItem>
                <ListItem>
                    <Checkbox checked={true} onChecked={() => {}} uniqueID={1} />
                    <ListContent checked={true}>
                        <h2>Washing clothers</h2>
                        <p>
                            Doing some laundry you dummy
                        </p>
                    </ListContent>
                </ListItem>
                
            </ListItems>
        </ListContainer>
    )
}
