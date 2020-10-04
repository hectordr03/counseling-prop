import React from 'react';
import classes from './Splash.module.css';

// Using Chakra UI component library
import {
	Button,
	ButtonGroup,
	ThemeProvider,
	Popover,
	PopoverTrigger,
	PopoverContent,
	Text,
	DarkMode,
	PopoverBody,
} from '@chakra-ui/core';

const Splash = () => {
	return (
		<div className={classes.Splash}>
			<div className={classes.content}>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
					Duis aute irure dolor in reprehenderit in voluptate velit
					esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
					occaecat cupidatat non proident, sunt in culpa qui officia
					deserunt mollit anim id est laborum.
				</p>
				{/* Buttons for "Support [Need help signing up?]", "Medicaid [See our list of Medicaid options]", "Services [What type of counseling do you need?]" */}
				<ThemeProvider>
					<Popover trigger='hover'>
						<ButtonGroup>
							<Button variantColor='teal' variant='ghost'>
								Support
							</Button>

                            {/* Testing Popover with "Medicaid" button */}
							<PopoverTrigger>
								<Button variantColor='teal' variant='ghost'>
									Medicaid
								</Button>
							</PopoverTrigger>
							<DarkMode>
								<PopoverContent width='300px' color='white'>
									<PopoverBody>
										<Text>Medicaid options</Text>
									</PopoverBody>
								</PopoverContent>
							</DarkMode>

							<Button variantColor='teal' variant='ghost'>
								Services
							</Button>
						</ButtonGroup>
					</Popover>
				</ThemeProvider>
			</div>
		</div>
	);
};

export default Splash;
